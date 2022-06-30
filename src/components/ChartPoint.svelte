<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const placemarkService = getContext("PlacemarkService");

    let chartTypeCat = 'pie';
    function onChangeCat(event) {
		chartTypeCat = event.currentTarget.value;
	}
    let chartTypeZip = 'bar';
    function onChangeZip(event) {
		chartTypeZip = event.currentTarget.value;
	}

    let totalByCategory = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    }

    let totalByZipCode = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    }

    function populateByCategory(pointList, categories) {
        totalByCategory.labels = [];
        categories.forEach(category => {
            totalByCategory.labels.push(`${category.name}`)
            totalByCategory.datasets[0].values.push(0);
        });
        categories.forEach((category, i) => {
            pointList.forEach(point => {
            if (point.category._id == category._id) {
                totalByCategory.datasets[0].values[i] += 1;
            }
            });
        });
    }

    function populateByZipCode(pointList) {
        totalByZipCode.labels = [];
        pointList.forEach(point => {
            if (!totalByZipCode.labels.includes(point.zipCode)) {
                totalByZipCode.labels.push(`${point.zipCode}`);
                totalByZipCode.datasets[0].values.push(0);
            }
        })
        totalByZipCode.labels.forEach((zipCode, i) => {
            pointList.forEach(point => {
                if (point.zipCode == zipCode) {
                    console.log(point.zipCode, zipCode, i);
                    totalByZipCode.datasets[0].values[i] += 1;
                }
            });
        });
    }

    onMount(async () => {
        let pointList = await placemarkService.getPoints();
        let categories = await placemarkService.getCategories();
        populateByCategory(pointList, categories);
        populateByZipCode(pointList);
    });
</script>
  
<div class="columns">
    <div class="column has-text-centered">
        <h1 class="title is-4">By Category</h1>
        <label>
            <input checked={chartTypeCat==="pie"} on:change={onChangeCat} type=radio group={chartTypeCat} name="chartTypeCat" value={"pie"}>
            Pie Chart
        </label>
        
        <label>
            <input checked={chartTypeCat==="bar"} on:change={onChangeCat} type=radio group={chartTypeCat} name="chartTypeCat" value={"bar"}>
            Bar chart
        </label>
        {#if chartTypeCat === "pie"} 
            <div class="column">
                <div class="column has-text-centered">
                    <Chart data={totalByCategory} type="pie"/>
                </div>
            </div>
        {:else}
            <div class="column">
                <div class="column has-text-centered">
                    <Chart data={totalByCategory} type="bar"/>
                </div>
            </div>
        {/if}
    </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">By Zip Code</h1>
        <label>
            <input checked={chartTypeZip==="pie"} on:change={onChangeZip} type=radio group={chartTypeZip} name="chartTypeZip" value={"pie"}>
            Pie Chart
        </label>
        
        <label>
            <input checked={chartTypeZip==="bar"} on:change={onChangeZip} type=radio group={chartTypeZip} name="chartTypeZip" value={"bar"}>
            Bar chart
        </label>
        {#if chartTypeZip === "pie"} 
            <div class="column">
                <div class="column has-text-centered">
                    <Chart data={totalByZipCode} type="pie"/>
                </div>
            </div>
        {:else}
            <div class="column">
                <div class="column has-text-centered">
                    <Chart data={totalByZipCode} type="bar"/>
                </div>
            </div>
        {/if}
    </div>
</div>