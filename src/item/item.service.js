const knexInstance = require('../database/connection');

const putId= async (itemname)=>{
    const result= await knexInstance("items").insert({ item:itemname});
    console.log (result);
    return result
};

const getall=async ()=>{
    const result= await knexInstance("items").select('*');
    console.log (result);
    return result;
};

const remId=async (idval)=>{
    const result= await knexInstance("items").where( 'id',idval).del();
    console.log (result);
    return result
};

const editval=async (edititemid,edititem)=>{
    const result= await knexInstance("items").where('id',edititemid).update({item:edititem});
    console.log (result);
    return result
};


module.exports={putId,getall,remId,editval}