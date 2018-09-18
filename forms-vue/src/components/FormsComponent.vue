<template>
    <div>
        <form @submit.prevent="saveData">
            <input type="text" v-validate="'required|min:3|max:10'" name="name" v-model="userData.name" data placeholder="Nome">
            <div v-if="errors.has('name')" :class="{'is-danger': errors.has('name')}">
                <p>Deve ser um nome entre 3 e 10 caracteres.</p>
            </div>
            <hr>

            <input type="email" name="email" v-validate="'required|email'" v-model="userData.email" placeholder="E-mail">
            <div v-if="errors.has('email')" :class="{'is-danger': errors.has('email')}">
                <span>{{ errors.first('email') }}</span>
                <p>Deve ser um e-mail válido.</p>
            </div>
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

        <div v-show="isSubmited">
            {{ userData }}
        </div>
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
            description: '',
            isSubmited: false
        }
    },
    methods: {
        saveData () {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.isSubmited = true;
                    return;
                }
            });
        }

    }
}
</script>

<style scoped>
    .description {
        white-space: pre;
    }

    .is-danger {
        border: 1px solid red;
    }

    .is-danger p {
        color: red;
    }
</style>