<template>
    <ContentField>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" id="username" placeholder="请输入用户名">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password"
                            placeholder="请输入密码">
                    </div>
                    <div class="error-message">{{ error_message }}</div>
                    <button type="submit" class="btn btn-primary">提交</button>
                </form>
            </div>
        </div>
    </ContentField>
</template>

<script>

    import ContentField from '../../../components/ContentFiled.vue'
    import { ref } from 'vue'
    import router from '../../../router/index'
    import store from '../../../store/index'

    export default {
        components: {
            ContentField
        },
        setup() {
            let username = ref('');
            let password = ref('');
            let error_message = ref('');

           

            const login = () => {
                let USER = document.querySelector('#username');
                let PASSWORD = document.querySelector('#password');
                username.value = USER.value;
                password.value = PASSWORD.value;
                error_message.value = "";
                console.log(username);
                console.log(password);
                if(username.value === "admin" && password.value === "admin"){
                    store.state.user.is_login = true;
                    console.log(store.state.user.is_login);
                    router.push({ name: 'home' });
                }else{
                    error_message.value = "用户名或密码错误";
                }
            }

            return {
                username,
                password,
                error_message,
                login,
            }
        }
    }
</script>

<style scoped>
    button {
        width: 100%;
    }

    div.error-message {
        color: red;
    }
</style>