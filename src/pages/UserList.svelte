<script>
    import student from "/src/assets/student.jpeg";
    import UserDetailList from "../components/UserDetailList.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import Footer from "../components/Footer.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"Placemark Inc."} subTitle={"Account list"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column is-two-thirds box has-text-centered">
        <h1 class="title is-4 title-account">Account List</h1>
        <UserDetailList/>
      </div>
    <div class="column has-text-centered">
      <img alt="students" src={student} width="400"/>
    </div>
</div>
  
<Footer/>

<style>
.title-account {
    padding-top: 20px;
}
</style>