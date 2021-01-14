AFRAME.registerComponent('move-box-on-click', {
    schema: {
        moveX: { type: 'number', default: 0 }
    },
    tick: function () {
        window.addEventListener("Click", (e) => {
            this.data.moveX = this.data.moveX + 0.1;
        })
        var pos = this.el.getAttribute("position");
        pos.x = pos.x + this.data.moveX;
        this.el.seAttribute("position", { x=pos.x, y=pos.y, z=pos.z });
    }
});