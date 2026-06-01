<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5 Exercises</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">MySite</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-light">Search</button>
      </form>
    </div>
  </div>
</nav>

<!-- Typography -->
<section class="container my-5">
  <h1 class="display-1">Bootstrap 5</h1>
  <p class="lead">This is a lead paragraph.</p>
  <p class="text-muted">This text is muted.</p>
  <p class="fw-bold">This text is bold.</p>
  <p class="text-uppercase">uppercase text</p>
  <p class="text-lowercase">LOWERCASE TEXT</p>
  <p class="text-capitalize">bootstrap text capitalize</p>
</section>

<!-- Responsive Grid -->
<section class="container my-5">
  <h2>Responsive Grid</h2>
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-primary text-white">Column 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-success text-white">Column 2</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-warning">Column 3</div>
    </div>
  </div>
</section>

<!-- Two Column Layout -->
<section class="container my-5">
  <h2>Two Column Layout</h2>
  <div class="row">
    <div class="col-md-3 bg-dark text-white p-4">
      Sidebar
    </div>
    <div class="col-md-9 bg-light p-4">
      Main Content Area
    </div>
  </div>
</section>

<!-- Four Column Layout -->
<section class="container my-5">
  <h2>Four Column Layout</h2>
  <div class="row">
    <div class="col-sm-3 p-3 bg-info">Box 1</div>
    <div class="col-sm-3 p-3 bg-secondary text-white">Box 2</div>
    <div class="col-sm-3 p-3 bg-danger text-white">Box 3</div>
    <div class="col-sm-3 p-3 bg-success text-white">Box 4</div>
  </div>
</section>

<!-- Alignment -->
<section class="container my-5">
  <h2>Alignment</h2>
  <div class="row justify-content-center align-items-center bg-light" style="height:200px;">
    <div class="col-4 bg-primary text-white p-3 text-center">
      Centered Content
    </div>
  </div>
</section>

<!-- Reordering -->
<section class="container my-5">
  <h2>Column Reordering</h2>
  <div class="row">
    <div class="col-md-6 order-md-2 bg-warning p-4">
      First on mobile, second on desktop
    </div>
    <div class="col-md-6 order-md-1 bg-info p-4">
      Second on mobile, first on desktop
    </div>
  </div>
</section>

<!-- Flexbox Navbar -->
<section class="container my-5">
  <h2>Flexbox Navbar</h2>
  <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-dark text-white p-3">
    <h4>Logo</h4>
    <a class="text-white text-decoration-none" href="#">Home</a>
    <a class="text-white text-decoration-none" href="#">Services</a>
    <a class="text-white text-decoration-none" href="#">Contact</a>
  </div>
</section>

<!-- Card Flex Layout -->
<section class="container my-5">
  <h2>Flex Card</h2>
  <div class="card p-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5>Product Card</h5>
        <p class="text-muted">Bootstrap flex utility example.</p>
      </div>
      <button class="btn btn-primary">Buy</button>
    </div>
  </div>
</section>

<!-- Registration Form -->
<section class="container my-5">
  <h2>Registration Form</h2>
  <form class="border p-4 rounded shadow">
    <div class="mb-3">
      <label class="form-label">Full Name</label>
      <input type="text" class="form-control" placeholder="Enter name">
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <div class="input-group">
        <span class="input-group-text">@</span>
        <input type="email" class="form-control" placeholder="Enter email">
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="Enter password">
    </div>

    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox">
      <label class="form-check-label">I agree to terms</label>
    </div>

    <button class="btn btn-success">Register</button>
  </form>
</section>

<!-- Floating Login Form -->
<section class="container my-5">
  <h2>Login Form</h2>
  <form class="border p-4 rounded shadow">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="email" placeholder="Email">
      <label for="email">Email address</label>
    </div>

    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="password" placeholder="Password">
      <label for="password">Password</label>
    </div>

    <button class="btn btn-primary w-100">Login</button>
  </form>
</section>

<!-- Buttons -->
<section class="container my-5">
  <h2>Buttons</h2>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-outline-primary">Outline</button>

  <div class="btn-group mt-3 d-block">
    <button class="btn btn-dark">Left</button>
    <button class="btn btn-dark">Middle</button>
    <button class="btn btn-dark">Right</button>
  </div>
</section>

<!-- Tabs and Pills -->
<section class="container my-5">
  <h2>Tabs and Pills</h2>

  <ul class="nav nav-tabs mb-3">
    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
  </ul>

  <ul class="nav nav-pills">
    <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
  </ul>
</section>

<!-- Profile Card -->
<section class="container my-5">
  <h2>Profile Card</h2>
  <div class="card shadow" style="width: 18rem;">
    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Profile">
    <div class="card-body">
      <h5 class="card-title">Kanishka</h5>
      <p class="card-text">Full Stack Developer</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div>
</section>

<!-- Media Object -->
<section class="container my-5">
  <h2>Media Object</h2>
  <div class="d-flex align-items-start">
    <img src="https://via.placeholder.com/100" class="me-3 rounded" alt="Image">
    <div>
      <h5>Media Heading</h5>
      <p>This is a media object layout using Bootstrap flex utilities.</p>
    </div>
  </div>
</section>

<!-- Spacing -->
<section class="container my-5">
  <h2>Spacing Utilities</h2>
  <div class="m-3 mt-4 p-2 py-5 bg-light">
    Margin and padding utilities applied here.
  </div>
</section>

<!-- Pricing Section -->
<section class="container my-5">
  <h2>Pricing Section</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card p-4 shadow text-center">
        <h4>Basic</h4>
        <h2>₹499</h2>
        <button class="btn btn-outline-primary">Choose</button>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card p-4 shadow text-center">
        <h4>Standard</h4>
        <h2>₹999</h2>
        <button class="btn btn-primary">Choose</button>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card p-4 shadow text-center">
        <h4>Premium</h4>
        <h2>₹1499</h2>
        <button class="btn btn-outline-primary">Choose</button>
      </div>
    </div>
  </div>
</section>

<!-- Colors -->
<section class="container my-5">
  <h2>Colors and Backgrounds</h2>
  <div class="p-3 bg-primary text-white">Primary</div>
  <div class="p-3 bg-warning text-dark">Warning</div>
  <div class="p-3 bg-success text-white">Success</div>
  <div class="p-3 bg-danger text-white">Danger</div>
  <div class="p-4 bg-dark bg-gradient text-white mt-3">
    Dark Gradient Background
  </div>
</section>

<!-- Display Visibility -->
<section class="container my-5">
  <h2>Display and Visibility</h2>
  <p class="d-none d-md-block bg-info p-3">
    This is hidden on mobile and visible on tablet and above.
  </p>

  <div class="d-none d-lg-flex bg-warning p-3">
    This appears as flex only on large screens.
  </div>
</section>

<!-- Sidebar -->
<section class="container my-5">
  <h2>Responsive Sidebar</h2>
  <div class="row">
    <div class="col-md-3 d-none d-md-block bg-dark text-white p-3">
      Sidebar visible on tablet and above
    </div>
    <div class="col-md-9 bg-light p-3">
      Content Area
    </div>
  </div>
</section>

<!-- Borders and Shadows -->
<section class="container my-5">
  <h2>Borders, Shadows, Rounded</h2>
  <img src="https://via.placeholder.com/150" class="border border-primary border-3 rounded-circle mb-3" alt="Rounded">

  <div class="card shadow-lg rounded-pill p-4">
    Shadow large and rounded pill card.
  </div>
</section>

<!-- Positioning -->
<section class="container my-5">
  <h2>Positioning</h2>

  <div class="position-relative d-inline-block">
    <img src="https://via.placeholder.com/200" class="rounded" alt="Image">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      New
    </span>
  </div>
</section>

<!-- Icons -->
<section class="container my-5">
  <h2>Bootstrap Icons</h2>
  <button class="btn btn-primary">
    <i class="bi bi-house"></i>
  </button>
  <button class="btn btn-success">
    <i class="bi bi-whatsapp"></i>
  </button>
  <button class="btn btn-danger">
    <i class="bi bi-youtube"></i>
  </button>
</section>

<!-- Modal -->
<section class="container my-5">
  <h2>Modal</h2>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open Modal
  </button>

  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bootstrap Modal</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          This is a modal popup.
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Accordion -->
<section class="container my-5 mb-5">
  <h2>Accordion</h2>

  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#one">
          Question 1
        </button>
      </h2>
      <div id="one" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          This is the first accordion content.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#two">
          Question 2
        </button>
      </h2>
      <div id="two" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          This is the second accordion content.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-dark text-white text-center p-3">
  <p>Follow us</p>
  <i class="bi bi-facebook mx-2"></i>
  <i class="bi bi-instagram mx-2"></i>
  <i class="bi bi-linkedin mx-2"></i>
  <p class="mb-0">© 2026 MySite</p>
</footer>

<!-- Fixed Footer Example -->
<div class="position-fixed bottom-0 end-0 bg-primary text-white p-2">
  Fixed Footer
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>