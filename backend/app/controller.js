const {saveCallid,getCallid} = require('./models');

exports.saveCallid = async (req,res) => {
    try{
        const {id,signalData} = req.body;
        await saveCallid(id,signalData);
        res.status(200).send(true);
    }catch(err) {
        res.status(400).send(ex.message);
    }
}

exports.getCallid = async (req,res) => {
    try{
        const {id} = req.params;
        const code = await getCallid(id);
        res.send(200).send(code);
    }catch(err) {
        res.status(400).send(ex.message);
    }
}