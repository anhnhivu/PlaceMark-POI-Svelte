<script>
    import TitleBar from "../components/TitleBar.svelte";
    import Footer from "../components/Footer.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const placemarkService = getContext("PlacemarkService");

    let chartType = 'pie';

    function onChange(event) {
		chartType = event.currentTarget.value;
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
  
<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"Placemark Inc."} subTitle={"User selected charts"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
</div>
  
<div class="box has-text-centered">
    <h1 class="title is-4 title-report">Customized charts</h1>
    <h2 class=" is-4 subtitle-report">Select Chart</h2>
    <div class="columns">
        <div class="column is-half has-text-centered">
            <label>
                <input checked={chartType==="pie"} type=radio on:change={onChange} group={chartType} name="chartType" value={"pie"}>
                Pie Chart
            </label>
            
            <label>
                <input checked={chartType==="bar"} type=radio on:change={onChange} group={chartType} name="chartType" value={"bar"}>
                Bar chart
            </label>
        </div>
        {#if chartType === "pie"} 
            <div class="column">
                <div class="column has-text-centered">
                    <h1 class="title is-4">By Zip Codes</h1>
                    <Chart data={totalByZipCode} type="pie"/>
                </div>
            </div>
        {:else}
            <div class="column">
                <div class="column has-text-centered">
                    <h1 class="title is-4">By Zip Codes</h1>
                    <Chart data={totalByZipCode} type="bar"/>
                </div>
            </div>
        {/if}
        
    </div>
</div>

  
<Footer/>
  
  <style>
    .title-report {
      padding-top: 20px;
      margin-bottom: 10px;
    }
    .subtitle-report {
      margin-top: 0px;
      margin-bottom: 10px;
    }
  </style>