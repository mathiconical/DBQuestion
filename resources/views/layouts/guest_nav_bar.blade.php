@include('layouts.app')

<nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom:2em; background-color: #f5f5dc">
    <div class="container">
        <a class="navbar-brand" href="/"><span class='fw-bold text-success'>DB</span><span class='fw-bold text-primary'>Questions</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#guestNavbar" aria-controls="guestNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="guestNavbar">
            <ul class="fw-bold text-uppercase navbar-nav ms-auto my-3 py-3">
                <li class="nav-item mx-3">
                    <a class="nav-link border-tertiary border-end" href="#">Ranking</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link border-tertiary border-end" href="#">Sobre</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
