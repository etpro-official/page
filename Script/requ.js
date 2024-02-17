function send_ms( email , message){
	email = document.getElementById('email').value;
const url_api = `https://api.telegram.org/bot6733816943:AAGCIvD5tJZYOF9RiSSHw3MUv_RI_LnZlgA/sendMessage?chat_id=-4128948846&text=${email}`
	const api = new XMLHttpRequest();
	api.open("GET" , url_api , true)
	api.send()
massage_send()


}


function massage_send(ms){
ms = document.getElementById('message').value;
const url_api = `https://api.telegram.org/bot6733816943:AAGCIvD5tJZYOF9RiSSHw3MUv_RI_LnZlgA/sendMessage?chat_id=-4128948846&text=${ms}`
	const api = new XMLHttpRequest();
	api.open("GET" , url_api , true)
	api.send()
}




	fetch("https://api.telegram.org/bot6733816943:AAGCIvD5tJZYOF9RiSSHw3MUv_RI_LnZlgA/getUpdates")
	.then(res=>res.json())
	.then(data=>{
		const miner = data.result.length-1;
		const alldat = data.result[miner].message.text;
		document.getElementById("posted").innerText = alldat;
	})



	function sub(){
		const sub_name = document.getElementById("subscriber").value;
		const url_sub_api =`https://api.telegram.org/bot6733816943:AAGCIvD5tJZYOF9RiSSHw3MUv_RI_LnZlgA/sendMessage?chat_id=-4128948846&text=Subscriber:- ${sub_name}`
		const api_send_sub = new XMLHttpRequest()
		api_send_sub.open("GET" , url_sub_api,true)
		api_send_sub.send()
		document.getElementById("responde").innerText = "Success Subscribe This Web!";
		document.getElementById("responde").style.color = "green";
	}