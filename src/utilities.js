import { Input } from "antd"

export const CAR_FORM=[
    {
        type:"input",
        name:"field_name1",
        label:"اسم الحقل",
        marker:
          <Input onChange={(e)=>{console.log(e.target.value)}}/>
        
    },
    {
        type:"input",
        name:"field_name2",
        label:"اسم الحقل",
        marker:<Input onChange={(e)=>{console.log(e.target.value)}}/>
    },
    {
        type:"input",
        label:"اسم الحقل",
        name:" field_name3",
        marker:<Input onChange={(e)=>{console.log(e.target.value)}}/>
    },
    {
        type:"input",
        name:"field_name4",
        label:"اسم الحقل",

        marker:<Input onChange={(e)=>{console.log(e.target.value)}}/>
    }
]