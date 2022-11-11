const {getall,putId,remId,editval}=require('./item.service');

const read=async (req,res,next)=>{
    const itemname=req.body.text;
    const foundNote=await putId(itemname);
    res.json({data:foundNote});
};

const readall=async (req,res,next)=>{
    const foundNote=await getall();
    res.json({data:foundNote});

};

const rem=async (req,res,next)=>{
    const idval=req.body.text;
    const foundNote=await remId(idval);
    res.json('deleted successfully');
};

const edit=async (req,res,next)=>{
    const edititemid=req.body.id;
    const edititem=req.body.text;
    const foundNote=await editval(edititemid,edititem);
    res.json('edited successfully');
};


module.exports={read,readall,rem,edit};