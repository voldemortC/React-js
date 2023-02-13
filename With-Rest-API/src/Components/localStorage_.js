const localStorage_ =  {
    insertItem: (keyname, payload, ) => {
        localStorage.setItem(keyname, JSON.stringify(payload));
    }
}
export default localStorage_;