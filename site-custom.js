const htmlContent = `
                                                                                                                   <div style="border:#88cc55 3px dashed;">            
                                                  
                                                  
      
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            transition: background-color 0.3s ease;
            text-align: center;
            padding-top: 50px;
        }
        select {
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }
        .selected-color {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <font size="5">Select a Background Color</font>
<br/>
    <select id="colorSelect" onchange="changeBackgroundColor()">
        <option value="">-- Select a Color --</option>
        <option value="white">White</option>
        <option value="violet">Violet</option>
        <option value="indigo">Indigo</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
    </select>

    <div id="selectedColor" class="selected-color"></div>

    <script>
        function changeBackgroundColor() {
            const selectElement = document.getElementById("colorSelect");
            const selectedColor = selectElement.value;
            document.body.style.backgroundColor = selectedColor;

            const selectedColorDiv = document.getElementById("selectedColor");
            if (selectedColor) {
                selectedColorDiv.textContent = "You selected: " + selectedColor;
            } else {
                selectedColorDiv.textContent = "";
            }
        }
    </script>

</body>
</html>
                                     
                     
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 
   <!DOCTYPE html>
<html>
<head>
  <style>
    body {
      text-align: center;
      padding-top: 40px;
      transition: color 0.3s ease, background-color 0.3s ease; /* Added background-color transition */
      color: white; /* Default font color is white */
      background-color: black; /* Default background color is black */
    }
    body * {
      transition: color 0.3s ease;
    }

    h1, p, a, button {
      margin: 10px;
      font-size: 18px;
    }

    button {
      padding: 7px 15px;
      margin: 5px;
      font-size: 10px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      color: white;
    }

    .violet { background-color: violet; color: black; }
    .indigo { background-color: indigo; }
    .blue { background-color: blue; }
    .green { background-color: green; }
    .yellow { background-color: yellow; color: black; }
    .orange { background-color: orange; color: black; }
    .red { background-color: red; }
    .black { background-color: black; }
    .white { background-color: white; color: black; } /* Added white button style */

    a {
      text-decoration: none;
    }
  </style>
</head>
<body>


  <font color="red" font size="5">Choose Font Color:</font><br/>
  <select id="colorSelector" onchange="changeColor(this.value)">
    <option value="violet">Violet</option>
    <option value="indigo">Indigo</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    <option value="orange">Orange</option>
    <option value="red">Red</option>
    <option value="black">Black</option>
    <option value="white">White</option>
  </select>

  <script>
    function changeColor(color) {
      const elements = document.querySelectorAll("body *");
      elements.forEach(el => {
        el.style.color = color;
      });
      document.body.style.backgroundColor = 'black'; // Set background to black when a font color is selected
    }

    // Set the default selected option (you can change '' to any other color)
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('colorSelector').value = 'auto';
      changeColor(''); // Apply the initial color
    });
  </script>

</body>
</html>                                               
     <br/>
                                                     <!DOCTYPE html>
<html lang="bn">
<head>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&family=Poppins&family=Roboto&family=Playfair+Display&family=Lobster&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif; /* Default font */
      padding: 15px;
      color: #333;
      transition: font-family 0.5s ease;
    }
    h1 {
      margin-bottom: 15px;
    }
    select {
      margin: 8px;
      padding: 8px 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      color: #333;
      cursor: pointer;
      font-size: 16px;
    }
    option {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <font color="green" font size="5">Change Font Style</font>
<br/>
  <select id="fontSelector" onchange="changeFont(this.value)">
    <option value="Poppins" selected>Poppins</option>
    <option value="Roboto">Roboto</option>
    <option value="Noto Sans Bengali">Noto Sans Bengali</option>
    <option value="Playfair Display">Playfair Display</option>
    <option value="Lobster">Lobster</option>
    <option value="Courier New">Courier New</option>
  </select>

  <script>
    function changeFont(font) {
      document.body.style.fontFamily = font;
    }

    // Set 'Poppins' as the initially selected font (done in the HTML)
  </script>
</body>
</html>
     
                                                      
                   <br/>                          
                                             
                                             
                                             
                                             
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
 
  <style>
    :root {
      font-size: 15px;
    }

    body {
      font-family: sans-serif;
      line-height: 1.6;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    label, select {
      font-size: 1rem;
    }
  </style>
</head>
<body>



  <font size="5">Selected  Font Size</font><br/>
  <select id="fontSizeSelector">
    <option value="8">8px</option>
    <option value="10">10px</option>
    <option value="15">15px</option>
    <option value="18">18px</option>
    <option value="20">20px</option>
    <option value="23">23px</option>
    <option value="25">25px </option>
    <option value="28">28px</option>
    <option value="30">30px</option>
  </select>

  <script>
    const selector = document.getElementById("fontSizeSelector");

    // আগের সিলেক্ট করা সাইজ লোড করো
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
      document.documentElement.style.fontSize = savedSize + "px";
      selector.value = savedSize;
    }

    // সিলেক্ট করলে সেভ করো
    selector.addEventListener("change", function () {
      const size = selector.value;
      document.documentElement.style.fontSize = size + "px";
      localStorage.setItem("fontSize", size); // লোকালি সেভ
    });
  </script>

</body>
</html>








                                                      </div>                                                                                                                                                                         
                                                   
`;