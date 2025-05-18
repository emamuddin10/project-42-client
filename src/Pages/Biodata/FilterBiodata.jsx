import React from 'react';

const FilterBiodata = ({ filters, onFilterChange, onApply }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4 text-red-600 font-serif text-center">Filter Biodatas</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onApply(); }}>
                <div>
                    <label className="block font-medium mb-1">Age Range:</label>
                    <div className="flex gap-2">
                        <input type="number" name="ageMin" value={filters.ageMin} onChange={onFilterChange} placeholder="Min" className="border p-2 w-full rounded" />
                        <input type="number" name="ageMax" value={filters.ageMax} onChange={onFilterChange} placeholder="Max" className="border p-2 w-full rounded" />
                    </div>
                </div>
                <div>
                    <label className="block font-medium mb-1">Type:</label>
                    <select name="type" value={filters.type} onChange={onFilterChange} className="border p-2 w-full rounded">
                        <option value="">Select Type</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium mb-1">Division:</label>
                    <select name="division" value={filters.division} onChange={onFilterChange} className="border p-2 w-full rounded">
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Filter
                </button>
            </form>
        </div>
    );
};

export default FilterBiodata;
