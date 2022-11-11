window.addEventListener("load", () => {
  let input = document.querySelectorAll("[data-tel-input-arch]");
  input.forEach((input) => {
    window.intlTelInput(input, {
      hiddeninputs: "full_number",
      // initialCountry: "UA",
      initialCountry: "auto",
      separateDialCode: true,
      geoIpLookup: function (callback) {
        $.get("http://ipinfo.io", function () {}, "jsonp").always(function (
          resp
        ) {
          var countryCode = resp && resp.country ? resp.country : "";
          console.log(countryCode);
          callback(countryCode);
        });
      },
      utilsScript: "./js/intl-tel-input/js/utils.js",
    });
  });
});
