import {readFile,writeFile,appendFile,mkdir} from "fs/promises";
//read file
const read_file=async (fileName)=>{
    const data=await readFile(fileName,"utf-8")
    console.log(data)
}

read_file('sample.txt')
//create file
const create_file=async(fileName,content)=>{
    await writeFile(fileName,content)
    console.log("file created successfuly..!")
}
create_file('ai.py','this is testing file')
//add content to file
const append_file=async(fileName,content)=>{
    await appendFile(fileName,content)
    console.log("extra content create succesfully")

}
append_file('sample.txt',"This is exra content")
//create folder
const create_dir=async(dir)=>{
 //await mkdir(dir)
}
create_dir('component')
//src/component2/java
const create_dir2=async(dir)=>{
    await mkdir(dir,{recursive:true})
   }
   create_dir2('src/component2/java')
