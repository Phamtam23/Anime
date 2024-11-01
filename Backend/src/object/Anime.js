
class Anime {
    constructor(name, day_start, author, content, status, number_episode, image_inside, image_outside, number_like, number_watch, id_Nation, id_type) {
        this._name = name;
        this._day_start = day_start;
        this._author = author;
        this._content = content;
        this._status = status;
        this._number_episode = number_episode;
        this._image_inside = image_inside;
        this._image_outside = image_outside;
        this._number_like = number_like;
        this._number_watch = number_watch;
        this._id_Nation = id_Nation;
        this._id_type = id_type;
    }

    // Getters
    get name() {
        return this._name;
    }
    get day_start() {
        return this._day_start;
    }
    get author() {
        return this._author;
    }
    get content() {
        return this._content;
    }
    get status() {
        return this._status;
    }
    get number_episode() {
        return this._number_episode;
    }
    get image_inside() {
        return this._image_inside;
    }
    get image_outside() {
        return this._image_outside;
    }
    get number_like() {
        return this._number_like;
    }
    get number_watch() {
        return this._number_watch;
    }
    get id_Nation() {
        return this._id_Nation;
    }
    get id_type() {
        return this._id_type;
    }

    // Setters
    set name(value) {
        this._name = value;
    }
    set day_start(value) {
        this._day_start = value;
    }
    set author(value) {
        this._author = value;
    }
    set content(value) {
        this._content = value;
    }
    set status(value) {
        this._status = value;
    }
    set number_episode(value) {
        this._number_episode = value;
    }
    set image_inside(value) {
        this._image_inside = value;
    }
    set image_outside(value) {
        this._image_outside = value;
    }
    set number_like(value) {
        this._number_like = value;
    }
    set number_watch(value) {
        this._number_watch = value;
    }
    set id_Nation(value) {
        this._id_Nation = value;
    }
    set id_type(value) {
        this._id_type = value;
    }
}



module.exports=Anime