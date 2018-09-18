<template>
    <div>
        <form>
            <input type="text" v-model="userData.name" placeholder="Nome">
            {{ userData.name }}
            <hr>

            <input type="email" v-model="userData.email" placeholder="E-mail">
            {{ userData.email }}
            <hr>

            <input type="number" v-model.number="userData.age" placeholder="Idade">
            {{ userData.age }}
            <hr>

            <input type="radio" v-model="userData.sex" name="sex" value="M"> Masculino |
            <input type="radio" v-model="userData.sex" name="sex" value="F"> Feminino
            <p v-if="userData.sex">Sexo Selecionado: {{ userData.sex }}</p>
            <hr>

            <select v-model="userData.state">
                <option value="">Selecione o Estado</option>
                <option value="CE">Ceará</option>
                <option value="MA">Maranhão</option>
                <option value="RN">Rio Grande do Norte</option>
            </select>
            <p v-if="userData.state">Estado selecionado: {{ userData.state }}</p>
            <hr>

            <label for="agree">Concordo com os termos de uso</label>
            <input v-model="terms" type="checkbox" id="agree">
            <p v-if="terms">{{ terms }}</p>
            <hr>

            <textarea cols="30" rows="10" v-model="description"></textarea>
            <!--v-text não renderiza o texto-->
            <div v-text="description" class="description"></div>
            <hr>

            <button type="submit">Enviar Agora</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userData: {
                name: '',
                email: '',
                age: '',
                sex: '',
                state: ''
            },
            terms: true,
            description: ''
        }
    }
}
</script>

<style scoped>
.description {
    white-space: pre;
}
</style>