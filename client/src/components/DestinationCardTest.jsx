const DestinationCard = ({title , }) => {

    


  return (
    <div class="p-6">
      <div class="max-w-4xl mx-auto p-4 bg-white rounded-md shadow-md flex flex-col md:flex-row gap-6">
        {/* <!-- Left: Main Image Placeholder --> */}
        <div class="md:w-1/2">
          <div class="bg-gray-200 rounded-md h-64 w-full"></div>
        </div>

        {/* <!-- Right: Text Content --> */}
        <div class="md:w-1/2 space-y-2">
          {/* <!-- Title --> */}
          <h2 class="text-xl font-semibold text-gray-800">
            {title}
          </h2>

          {/* <!-- Description --> */}
          <p class="text-gray-600 text-sm ">
           {description}
          </p>

          {/* <!-- Read More Link --> */}
          <a href="#" class="text-blue-500 hover:underline">
            {url}
          </a>

          {/* <!-- Categories/Tags --> */}
          
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span>หมวด:</span>
            <a href="#" class="text-blue-500 hover:underline">
              ทะเล
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              ภูเขา
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              วัฒนธรรม
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              ธรรมชาติ
            </a>
            <a href="#" class="text-blue-500 hover:underline">
              อื่นๆ
            </a>
          </div>

          {/* <!-- Thumbnails --> */}
          <div class="flex gap-2">
            <div class="bg-red-200 w-16 h-16 rounded-md"></div>
            <div class="bg-gray-200 w-16 h-16 rounded-md"></div>
            <div class="bg-gray-200 w-16 h-16 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DestinationCard; 
