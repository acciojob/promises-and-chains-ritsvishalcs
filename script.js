//your JS code here. If required.
document.getElementById("btn").addEventListener("click",()=>{
	const InputAge = document.getElementById("age").value.trim()
	const InputName = document.getElementById("name").value.trim()

	if(InputAge = "" || InputName = ""){
		alert("Please enter valid details.")
		return
	}
	let age = Number(InputAge)
	let name = InputName
	
	const checkVoteElegibilty = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve();
			}else reject()			
		},4000)
	})
	checkVoteElegibilty().then(()=>{
		alert(`Welcome, ${name}. You can vote.`)
	}).catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`)
	})
})