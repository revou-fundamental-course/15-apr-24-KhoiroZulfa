function convert() {
    const celcius = document.getElementById("celciusInput").value;
    // const result = document.getElementById("fahrenheit");
    // const explanation = document.getElementById("explain");
    
    const convert = `${(celcius * 9) / 5 + 32}`;
    
    document.getElementById("fahrenheit").value = `${convert}`;
    
    document.getElementById("explain").value = `${celcius || 0}°C * (9 / 5) + 32 = ${convert} °F`;
  }

  function convertFC() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    // const result = document.getElementById("fahrenheit");
    // const explanation = document.getElementById("explain");
    
    const convertFC = `${(fahrenheit - 32) * 5/9}`;
    
    document.getElementById("celciusInput").value = `${convertFC}`;
    
    document.getElementById("explain").value = `(${fahrenheit || 0}°F - 32) * 5 / 9 = ${convertFC} °F`;
  }
  
  function reset() {
    document.getElementById("celciusInput").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("explain").value = "";
  }
