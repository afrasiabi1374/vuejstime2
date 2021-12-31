<template>
  <div>
      <h1>validate</h1>
  </div>
</template>

<script>
export default {
    ///     مقدار آیدی باید عدد باشه 
    validate({ params, error }){
        if (/^\d+$/.test(params.id)) {
            return /^\d+$/.test(params.id)
        } else if (!(/^\d+$/.test(params.id))) {
            return error({statusCode: 400, message: 'درخواست یا ورودی اشتباه دادی'})
        }
        
    }
}
</script>

<style>

</style>