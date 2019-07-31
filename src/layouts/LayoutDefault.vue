<template>
  <div>
  	<Nav />
  	<slot />
  </div>
</template>
<script>
import Nav from '../components/shared/Nav';

export default{
	name:"layout-default",
	components:{ Nav }
}

</script>