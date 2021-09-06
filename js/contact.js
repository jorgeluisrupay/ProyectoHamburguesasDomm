$("#contactus").submit(function(event) {
    event.preventDefault();
    var form = {
        nombre: $('#nombre').val(),
        correo: $('#correo').val(),
        telefono: $('#telefono').val(),
        mensaje: $('#mensaje').val()
      };

    $.ajax({
        type: "POST",
        url: "https://api-backend-burger-burguerdoom.herokuapp.com/api/form/save",
        data: JSON.stringify(form),
        async:false,
        dataType: 'json',
        contentType: "application/json",
        
        success: function(responseData, textStatus, jqXHR) {
            console.log(responseData.description);
            alert(responseData.description)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
});