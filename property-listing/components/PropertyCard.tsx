import { PropertyProps } from "@/interfaces";

export default function PropertyCard({ name, price, rating, image }: PropertyProps) {
    return (
        <div className="order rounded shadow-sm overflow-hidden">
            <img src="{image}" alt="{name}" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="font-semibold">{name}</h2>
                <p className="text-blue-600 font-bold">${name}/night</p>
                <p className="text-sm text-gray-500">{rating}</p>
            </div>
        </div>
    );
}