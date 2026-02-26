import React, { useState } from 'react'

const FormWithAllInput = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white m-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Form with All Input Types</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex flex-col gap-4">
          {/* Text-based inputs */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Text</label>
            <input type="text" name="text" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Basic text input" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Email</label>
            <input type="email" name="email" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="user@example.com" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Password</label>
            <input type="password" name="password" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="********" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Search</label>
            <input type="search" name="search" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Search..." />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Tel</label>
            <input type="tel" name="tel" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="123-456-7890" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">URL</label>
            <input type="url" name="url" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://example.com" />
          </div>

          {/* Numeric inputs */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Number</label>
            <input type="number" name="number" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Range</label>
            <input type="range" name="range" onChange={handleChange} className="w-full" />
          </div>

          {/* Date & Time inputs */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Date</label>
            <input type="date" name="date" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Datetime-local</label>
            <input type="datetime-local" name="datetime-local" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Month</label>
            <input type="month" name="month" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Week</label>
            <input type="week" name="week" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Time</label>
            <input type="time" name="time" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          {/* Special inputs */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Color</label>
            <input type="color" name="color" onChange={handleChange} className="h-10 w-full cursor-pointer" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">File</label>
            <input type="file" name="file" onChange={handleChange} className="border p-2 rounded bg-gray-50" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Select</label>
            <select name="select" onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        {/* Checkbox & Radio */}
        <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="chk1" onChange={handleChange} className="w-4 h-4" />
            <label htmlFor="chk1" className="text-gray-700">I accept terms and conditions (Checkbox)</label>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <span className="font-medium text-gray-700">Choose an option (Radio):</span>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <input type="radio" name="radioGroup" value="A" id="rad1" onChange={handleChange} />
                <label htmlFor="rad1">Option A</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="radioGroup" value="B" id="rad2" onChange={handleChange} />
                <label htmlFor="rad2">Option B</label>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Input */}
        <input type="hidden" name="hiddenInput" value="secret_value" />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t">
          <input type="button" value="Normal Button" onClick={() => alert('Button type clicked')} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer transition" />
          <input type="reset" value="Reset Form" className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded cursor-pointer transition" />
          <input type="submit" value="Submit Form" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer transition font-semibold" />
          {/* Image input acts as submit */}
          <div className="flex items-center gap-2">
             <span className="text-sm text-gray-500">Image Input (Submit):</span>
             <input type="image" src="https://via.placeholder.com/80x30?text=Go" alt="Submit" width="80" height="30" />
          </div>
        </div>

      </form>
    </div>
  )
}

export default FormWithAllInput