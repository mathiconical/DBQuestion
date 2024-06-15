@include('layouts.guest_nav_bar')

<style>
    body {
    background: linear-gradient(319deg, #5f5, #f5f5dc); /* Initial gradient */
    background-size: 200% 200%; /* Double the size for the animation */
    animation: gradientMove 5s ease-in-out infinite; /* Animation settings */
    }

    @keyframes gradientMove {
    0% { background-position: 50% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 50% 50%; }
    }
</style>
<body>
    <script src="{{ asset('js/functionUtils.js') }}"></script>
    <div class="container">
        <div class="jumbotron text-center">
            <h1 class="display-4">
                <a href='/' class='text-decoration-none'>
                    <span class='fw-bold text-success'>
                        DB
                    </span>
                    <span class='fw-bold text-primary'>
                        Questions
                    </span>
                </a>
                !
            </h1>
            <img src="{{ asset('img/dbqimg.png') }}" alt="DBQestion Image" class="img-fluid">
            <p class="lead text-uppercase">desafie seus alunos com o <span class='fw-bold text-success'>DB</span><span class='fw-bold text-primary'>Questions</span></p>
            <hr style="width: 50%; margin-left:25%"/>
        </div>

        <div class='container'>
            <div class='form-group' style="display: grid;">
                <div class='col-lg-4 ml-auto' style="justify-self:center">
                    <input type="email" class="form-control border border-success" id="email" name="email" placeholder="Digite seu email">
                    <span id='emailSpan' class='mx-2 fw-bold'></span>
                </div>
                <div class='col-lg-4 ml-auto' style="justify-self:center">
                    <input type="password" class="form-control border border-success" id="password" name="password" placeholder="Digite sua senha">
                    <span id='passwordSpan' class='mx-2 fw-bold'></span>
                </div>
                <div class='col-lg-4 ml-auto my-2 py-2' style="justify-self:center">
                    <button class="btn btn-primary fw-bold text-uppercase" style="float: right;">Entrar</button>
                    <button class="btn btn-secondary fw-bold text-uppercase" style="float: left">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const email = document.getElementById('email');
        const emailSpan = document.getElementById('emailSpan');

        addListenerMulti(email, 'input complete blur change keyUp paste copy cut', () => validateEmail(email.value, email, emailSpan));

        const password = document.getElementById('password');
        const passwordSpan = document.getElementById('passwordSpan');
        addListenerMulti(password, 'input complete blur change keyUp paste copy cut', () => validatePassword(password.value, password, passwordSpan));
    });
</script>

@include('layouts.footer')
