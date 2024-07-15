class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 2
        this.acceleration = .2
        this.controls = new Control();
    }

    update() {
        if (this.controls.forward) {
            this.speed = this.speed - this.acceleration
            this.speed < -4 ? this.speed = -4 : null
        }
        if (this.controls.reverse) {
            this.speed+=this.acceleration
            this.speed > 3 ? this.speed = 3 : null

        }
        this.y = this.y +this.speed
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y + this.height,
            this.width,
            this.height
        )
        ctx.fill()

    }

}














