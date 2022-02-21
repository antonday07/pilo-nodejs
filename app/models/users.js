module.exports = mongoose => {
    var schema = mongoose.Schema({
        username: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
        avatar: {type: String, data: Buffer},
        bio: {type: String},
        workspace_id: {type: mongoose.Schema.ObjectId, ref: "workspace"}
    }, {
        timestamps: true
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const User = mongoose.model('user', schema);
    return User
}