import React from "react";

const Dog = (props) => {
    const addFavs = (e) => {
        var favitems = localStorage.getItem("favs")
        if (favitems === null) {
            favitems = []
        } else {
            favitems = JSON.parse(favitems);
        }
        if (e.target.checked) {
            favitems.push(e.target.value)
        } else {
            var index = favitems.indexOf(e.target.value);
            if (index !== -1) {
                favitems.splice(index, 1);
            }
        }
        localStorage.setItem("favs", JSON.stringify(favitems))
        console.log(e.target.value)
    }
    const removeFavs = (e) => {
        var favitems = localStorage.getItem("favs")
        if (favitems === null) {
            favitems = []
        } else {
            favitems = JSON.parse(favitems);
        }
        if (!e.target.checked) {
            favitems.push(e.target.value)
        } else {
            var index = favitems.indexOf(e.target.value);
            if (index !== -1) {
                favitems.splice(index, 1);
            }
        }
        localStorage.setItem("favs", JSON.stringify(favitems))
        window.location.reload(true);
        console.log(e.target.value)
    }
    return (
        <div >
            <img src={props.url} style={{ width: 300, height: 300 }}></img>
            <div style={{ display: 'block' }} >
                <input type="checkbox" id="mycheckbox" value={props.url} onChange={addFavs} hidden={props.display} /><label hidden={props.display}>Add to Favorites</label>
                <input type="checkbox" id="mycheckbox" value={props.url} onChange={removeFavs} hidden={!props.display} /><label hidden={!props.display}>Remove from Favorites</label>
            </div>
        </div>
    )
}

export default Dog