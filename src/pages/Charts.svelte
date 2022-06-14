<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    import cityscape from "/src/assets/cityscape.png";
  
    const placemarkService = getContext("PlacemarkService");
  
    let totalByCategory = {
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

    onMount(async () => {
        let pointList = await placemarkService.getPoints();
        let categories = await placemarkService.getCategories();
        populateByCategory(pointList, categories);
        console.log(totalByCategory);
        console.log(pointList);
        console.log(categories);
    });
</script>
  
<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Placemark Analytics"} title={"Placemark Services Inc."}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
        <img alt="City" src={cityscape} width="300"/>
      </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">By Category</h1>
        <Chart data={totalByCategory} type="bar"/>
    </div>
  </div>