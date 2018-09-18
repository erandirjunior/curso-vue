<template>
    <div>
        <form>
            <input type="text" placeholder="Nome">
            <hr>

            <input type="email" placeholder="E-mail">
            <hr>

            <input type="radio" name="sex" value="M"> Masculino
            <input type="radio" name="sex" value="F"> Feminino
            <hr>

            <select>
                <option value="">Selecione o Estado</option>
                <option value="CE">Ceará</option>
                <option value="MA">Maranhão</option>
                <option value="RN">Rio Grande do Norte</option>
            </select>
            <hr>

            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" id="agree">
            <hr>

            <textarea cols="30" rows="10"></textarea>
            <hr>

            <button type="submit">Enviar Agora</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>