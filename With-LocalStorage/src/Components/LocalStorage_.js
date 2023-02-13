const LocalStorage_ = (data, action) => {
	if(action == "insert"){
		if(typeof localStorage["storageSpace"] === "undefined"){
			var storageSpace = [];
			data.id = 1;
			storageSpace.push(data);
			localStorage.setItem("storageSpace", JSON.stringify(storageSpace));
		} else {
			let getStorageData = JSON.parse(localStorage.getItem("storageSpace"))
			data.id = getStorageData.length + 1;
			getStorageData.push(data);
			localStorage.setItem("storageSpace", JSON.stringify(getStorageData));
		}
	}

	if(action == "get"){
		if(typeof localStorage["storageSpace"] === "undefined"){
			return [];
		}else{
			let getStorageData = JSON.parse(localStorage.getItem("storageSpace"));
			return getStorageData.sort((a,b) =>  {return b.id-a.id});
			console.log(Array.isArray(getStorageData))
		}
	}

	if(action == "edit"){
		let getStorageData = JSON.parse(localStorage.getItem("storageSpace"));
		getStorageData = getStorageData.filter(el => el.id == data);   //without callback only based on condition
		return getStorageData[0];
		// return getStorageData.filter((el) => { return el.id == data}); //using call back
	}

	if(action == "update"){
		let getStorageData = JSON.parse(localStorage.getItem("storageSpace"));

		let index = getStorageData.findIndex(el => el.id == data.id);
		getStorageData[index]                 = data;
		localStorage.setItem("storageSpace", JSON.stringify(getStorageData))
		return JSON.parse(localStorage.getItem("storageSpace"));
	}

	if(action == "delete"){
		let getStorageData = JSON.parse(localStorage.getItem("storageSpace"));

		let index = getStorageData.findIndex(el => el.id == data.id);
		getStorageData.splice(index, 1);
		localStorage.setItem("storageSpace", JSON.stringify(getStorageData))

		return JSON.parse(localStorage.getItem("storageSpace"));
	}
}
export default LocalStorage_;