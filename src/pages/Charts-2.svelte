<script>
    import cityscape from "/src/assets/cityscape.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
  
    let data = {
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          values: [10, 12, 3, 9, 8, 15, 9]
        }
      ]
    };
</script>
  
<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Placemark Analytics"} title={"Placemark Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Charts of places</h1>
      <Chart data={data} type="line"/>
    </div>
    <div class="column has-text-centered">
      <img alt="Homer" src={cityscape} width="300"/>
    </div>
</div>