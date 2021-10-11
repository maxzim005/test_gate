const Tag = (props) => {
    return <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
      Choose your Tag
    </a>
  
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a class="dropdown-item" href="#">Ok</a></li>
      <li><a class="dropdown-item" href="#">Error</a></li>
    </ul>
  </div>
}

export default Tag;