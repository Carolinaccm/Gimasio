//VerTablaMaquina -- GET
function MostrarDatosMaquina(){
	$.ajax({    
    url : 'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/gym/gym',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(LasMaquinas) {
		console.log(LasMaquinas);
		$("#ListaMaquinas").empty();
        let LaTablaDeMaquinas = '<table>';
		for (i=0; i<LasMaquinas.items.length; i++){
			LaTablaDeMaquinas += '<tr>';
	        LaTablaDeMaquinas += '<td>'+ LasMaquinas.items[i].id+ '</td>'; 		
	        LaTablaDeMaquinas += '<td>'+ LasMaquinas.items[i].brand+ '</td>'; 		
	        LaTablaDeMaquinas += '<td>'+ LasMaquinas.items[i].model+ '</td>'; 		
	        LaTablaDeMaquinas += '<td>'+ LasMaquinas.items[i].category_id+ '</td>'; 		
	        LaTablaDeMaquinas += '<td>'+ LasMaquinas.items[i].name+ '</td>';
            LaTablaDeMaquinas += '<td><button onclick="EliminarMaquina'+LasMaquinas.items[i].id+' )">Borrar</button>';			
			LaTablaDeMaquinas += '</tr>';
            
		}
        LaTablaDeMaquinas += '</table>';
	    $("#ListaMaquinas").append(LaTablaDeMaquinas);    
	},
    error : function(xhr, status) {
        alert('No ha funcionado: '+ status + json);
    }
});
}


//GuardarMaquina --POST	
function GuardarDatosMaquina(){
	let LosDatosMaquina = {
		id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
	};
	let datosJson = JSON.stringify(LosDatosMaquina); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/gym/gym',
	data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz guardado la info de la máquina con éxito");
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");
			$("#name").val("");
        	MostrarDatosMaquina();	
			}
		}
	});
}


//ActualizarMaquina  ---PUT
function EditarDatosMaquina(){
	let LosDatosMaquina = {
		id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
	};
	let datosJson = JSON.stringify(LosDatosMaquina); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/gym/gym',
	data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz actualizado al info de la máquina con éxito");
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");
			$("#name").val("");
            $("#id").attr("readonly", false); 
        	MostrarDatosMaquina();	
			}
		}
	});
}	

//función DELETE
function EliminarMaquina(id){
    let LosDatosMaquina={
        id:idMaquina
    };
    let dataToSend=JSON.stringify(LosDatosMaquina);
    $.ajax({
        url:"https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/gym/gym",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(id){
            MostrarDatosMaquina();
           alert("Haz elimiando la máquina con éxito")
        }
    });
}
	
//-------------------------------------------------------------------------------


//VerTablaMaquina -- GET
function MostrarDatosCliente(){
	$.ajax({    
    url : 'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(LosClientes) {
		console.log(LosClientes);
		$("#ListaClientes").empty();
        let LaTablaDeClientes = '<table>';
		for (i=0; i<LosClientes.items.length; i++){
			LaTablaDeClientes += '<tr>';
	        LaTablaDeClientes += '<td>'+ LosClientes.items[i].id+ '</td>'; 		
	        LaTablaDeClientes += '<td>'+ LosClientes.items[i].name+ '</td>'; 		
	        LaTablaDeClientes += '<td>'+ LosClientes.items[i].email+ '</td>'; 		
	        LaTablaDeClientes += '<td>'+ LosClientes.items[i].age+ '</td>'; 
            LaTablaDeClientes += '<td><button onclick="EliminarCliente'+LosClientes.items[i].id+' )">Borrar</button>';			
			LaTablaDeClientes += '</tr>';
            
		}
        LaTablaDeClientes += '</table>';
	    $("#ListaClientes").append(LaTablaDeClientes);    
	},
    error : function(xhr, status) {
        alert('No ha funcionado: '+ status + json);
    }
});
}
	

//GuardarMaquina --POST	
function GuardarDatosCliente(){
	let LosDatosCliente = {
		id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(LosDatosCliente); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz guardado la info del cliente con éxito");
			$("#id").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");
        	MostrarDatosCliente();	
			}
		}
	});
}


//ActualizarMaquina  ---PUT
function EditarDatosCliente(){
	let LosDatosCliente = {
		id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(LosDatosCliente); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz actualizado al info del cliente con éxito");
			$("#id").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");
            $("#id").attr("readonly", false); 
        	MostrarDatosCliente();	
			}
		}
	});
}	

//función DELETE
function EliminarCliente(id){
    let LosDatosCliente={
        id:idCliente
    };
    let dataToSend=JSON.stringify(LosDatosCliente);
    $.ajax({
        url:"https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(id){
            MostrarDatosCliente();
           alert("Haz elimiando al cliente con éxito")
        }
    });
}
	
//------------------------------------------------------------------------------


//VerTablaMaquina -- GET
function MostrarMensajes(){
	$.ajax({    
    url : 'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(LosMensajes) {
		console.log(LosMensajes);
		$("#ListaMensajes").empty();
        let LaTablaDeMensajes = '<table>';
		for (i=0; i<LosMensajes.items.length; i++){
			LaTablaDeMensajes += '<tr>';
	        LaTablaDeMensajes += '<td>'+ LosMensajes.items[i].id+ '</td>'; 		
	        LaTablaDeMensajes += '<td>'+ LosMensajes.items[i].messagetext+ '</td>';
            LaTablaDeMensajes += '<td><button onclick="EliminarMensaje'+LosMensajes.items[i].id+' )">Borrar</button>';			
			LaTablaDeMensajes += '</tr>';
            
		}
        LaTablaDeMensajes += '</table>';
	    $("#ListaMensajes").append(LaTablaDeMensajes);    
	},
    error : function(xhr, status) {
        alert('No ha funcionado: '+ status + json);
    }
});
}
	

//GuardarMaquina --POST	
function GuardarMensajes(){
	let LosDatosDeMensaje = {
		id: $("#id").val(),
        messagetext: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(LosDatosDeMensaje); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz guardado el mensaje con éxito");
			$("#id").val("");
			$("#messagetext").val("");
        	MostrarMensajes();	
			}
		}
	});
}


//ActualizarMaquina  ---PUT
function ActualizarMensajes(){
	let LosDatosDeMensaje = {
		id: $("#id").val(),
        messagetext: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(LosDatosDeMensaje); 
	$.ajax({   
    url:'https://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Haz actualizado el mensaje con éxito");
			$("#id").val("");
			$("#messagetext").val("");
            $("#id").attr("readonly", false); 
        	MostrarMensajes();	
			}
		}
	});
}	

//función DELETE
function EliminarMensaje(id){
    let LosDatosDeMensaje={
        id:idMensaje
    };
    let dataToSend=JSON.stringify(LosDatosDeMensaje);
    $.ajax({
        url:"hhttps://g46a263cc01387e-gimnasiobd2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(id){
            MostrarMensajes();
           alert("Haz elimiando el mensaje con éxito")
        }
    });
}