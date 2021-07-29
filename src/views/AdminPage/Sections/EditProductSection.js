import React, { useEffect, useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import { Button, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import './AddProductSection.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./EditProductSection.css"
import { toast } from 'react-toastify';


function EditProductSection(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [liveLink, setLiveLink] = useState("")
    const [videoLink, setVideoLink] = useState("")
    const [codeLink, setCodeLink] = useState("")
    const [diagImage, setDiagImage] = useState("")
    const [thumbImage, setThumbImage] = useState("")
    const [documentation, setDocumentation] = useState("")

    const [button, setButton] = useState("outlined")

    useEffect(() => {
        getProject(props.id)
    }, [])

    const getProject = (id)=>{
        fetch(`https://still-brook-51810.herokuapp.com/api/projects/${id}`).then(res => {
            if(res.ok){
            return res.json()
            } 
        }).then(data => {
            if (data) {
                setTitle(data.project.title)
                setDescription(data.project.description)
                setDocumentation(data.project.documentation)
                setLiveLink(data.project.liveLink)
                setVideoLink(data.project.videoLink)
                setCodeLink(data.project.codeLink)
                setDiagImage(data.project.diagram)
                setThumbImage(data.project.thumbImage)
            }
        })
    }

    const handleSubmit = (e)=>{
        setButton("disabled")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description, documentation: documentation, liveLink: liveLink, videoLink: videoLink, codeLink: codeLink, diagram: diagImage, thumbImage: thumbImage })
        };
        fetch(`https://still-brook-51810.herokuapp.com/api/projects/edit-project/${props.id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.msg){
                    toast.success(data.msg)
                    setTitle("")
                    setDescription("")
                    setLiveLink("")
                    setVideoLink("")
                    setDiagImage("")
                    setThumbImage("")
                    setCodeLink("")
                    setDocumentation("")
                }else if(data.err){
                    toast.error(data.err)
                }
                setButton("outlined")
                getProject(props.id)
        });
    }

    return (

        <div className="form-card">
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input id="my-input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input2">Description</InputLabel>
                <Input id="my-input2" value={description} onChange={(e) => setDescription(e.target.value)} />  
            </FormControl>
            <div className="input-div">
                <CKEditor
                    editor={ ClassicEditor }
                    data={documentation}
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDocumentation(data)
                    } }
                    
                />
            </div>
            
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input3">Live Link</InputLabel>
                <Input id="my-input3" value={liveLink} onChange={(e) => setLiveLink(e.target.value)}/>
            </FormControl>
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input4">Video Link</InputLabel>
                <Input id="my-input4" value={videoLink} onChange={(e) => setVideoLink(e.target.value)}/>
            </FormControl>
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input5">Diagram Image</InputLabel>
                <Input id="my-input5" value={diagImage} onChange={(e) => setDiagImage(e.target.value)}/>
            </FormControl>
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input6">Thumb Image</InputLabel>
                <Input id="my-input6" value={thumbImage} onChange={(e) => setThumbImage(e.target.value)}/>
            </FormControl>
            
            <FormControl className="input-div">
                <InputLabel htmlFor="my-input7">Code Link</InputLabel>
                <Input id="my-input7" value={codeLink} onChange={(e) => setCodeLink(e.target.value)}/>
            </FormControl>
            <FormControl className="input-div">
                <Button variant={button} color="secondary" onClick={handleSubmit}>
                    Edit Project
                </Button>
            </FormControl>
        </div>
    )
}

export default EditProductSection

