@include('layouts.guest_nav_bar')

<div class="container">
    <div class="jumbotron text-center">
        <h1 class="display-4"><span class='fw-bold text-success'>DB</span><span class='fw-bold text-primary'>Questions</span>!</h1>
        <img src="{{ asset('img/dbqimg.png') }}" alt="DBQestion Image" class="img-fluid">
        <p class="lead text-uppercase">Teste seus alunos com o <span class='fw-bold text-success'>DB</span><span class='fw-bold text-primary'>Questions</span></p>
        <hr style="width: 50%; margin-left:25%"/>
    </div>
</div>

<div class='container'>
    <div class='form-group' style="display: grid;">
        <div class='col-lg-4 ml-auto my-2' style="justify-self:center">
            <input type="text" class="form-control" id="login" name="login" placeholder="Digite seu login">
        </div>
        <div class='col-lg-4 ml-auto my-2' style="justify-self:center">
            <input type="password" class="form-control" id="password" name="password" placeholder="Digite sua senha">
        </div>
        <div class='col-lg-4 ml-auto my-2 py-2' style="justify-self:center">
            <button class="btn btn-primary" style="float: right;">Entrar</button>
            <button class="btn btn-secondary" style="float: left">Cadastrar</button>
        </div>
    </div>
</div>

@include('layouts.footer')
