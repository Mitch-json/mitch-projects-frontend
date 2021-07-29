import React from "react";

const AddComment = () => {
return (
    <form style={{marginTop: 300, marginBottom: 300, maxWidth: 300}} >
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Name
                </label>
            </div>
            <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"></input>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    <span class="text-gray-700">Textarea</span>
                </label>
            </div>
            <div className="md:w-2/3">
                <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content."></textarea>
            </div>
        </div>
        <div className="md:flex md:items-center md-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Sign Up
            </button>
            </div>
        </div>
    </form>
      );
    };

    export default AddComment;