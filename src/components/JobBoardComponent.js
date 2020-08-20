import React from 'react'; 

const JobBoardComponent = ({
    job: {
        id,
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    },
    handleTagClick,
}) => {
    const tags = [role, level];

    if(tools) {
        tags.push(...tools);
     }

    if(languages) {
        tags.push(...languages);
     }

     

    return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        featured && 'border-l-4 border-teal-500 border-solid'}lg:flex-row`}>
        <div>
            <img className='-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0' src={logo} alt={company} />
        </div> 
        <div className="flex flex-col justify-between ml-4 p-6 rounded">
            <h3 className="font-bold text-teal-500 ">
                {company}
                {isNew && <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full uppercase text-lg">New</span>}
                {featured && (<span className="text-white bg-gray-800 font-bold m-2 py-1 px-2 rounded-full uppercase text-lg">Featured</span>)}
            </h3>
            <h2 className="font-bold text-xl my-2 ">{position}</h2>
            <p className="text-gray-700">
                {postedAt} · {contract} · {location}
            </p>
        </div>
        <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0"> 
            {tags ? tags.map((tag) => (<span 
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 p-2 rounded">{tag}</span>)) : ''}
        </div>
    </div>
    )};
    
export default JobBoardComponent;
