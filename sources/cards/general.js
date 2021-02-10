module.exports = `<!DOCTYPE html>

<html>
  <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
    />      
  </head>

  <body> 
    <div class="card">
        <img class="card-image" src="https://images.unsplash.com/photo-1573136251770-66d8cc9d77db?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />   
        <div class="card-content">
            <h4 class="card-title">Card Titles</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus delectus deleniti, quibusdam commodi.</p>
        </div>        
    </div>       
  </body>

  <style type="text/css">
    .card {
        box-shadow: 4px 4px 40px 10px rgba(211, 211, 212, 0.15);
        background-color: #fff;
        padding: 1.5em;        
        padding-bottom: 0;
        width: 100%;
        min-height: 200px;
        border-radius: 8px;
    }

    .card-image {
        max-height: 120px;
        width: 100%;
        height: 100%;
        object-fit: cover;        
        border-radius: 8px;
    }

    .card-content {
        padding:1em 0;
    }

    .card-title {
        font-weight: bold;
    }

    .card-text {
        line-height: 1.6;
    }
  </style>

  <script>
    function abc(x, y) {
      return x * y;
    }
  </script>
</html>`;

