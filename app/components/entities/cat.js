__mainApp.Cat = 
{
    click: 0
    ,name: ''
    ,image: ''
    ,isViewed: false
    ,isActive: true
    ,votes: Math.floor((Math.random() * 10) + 1)
    , Cat: function(_name, _image)
    {
        this.name = _name;
        this.image = _image;
    }
}