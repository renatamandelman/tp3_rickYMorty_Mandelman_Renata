import CharacterCard from "@/components/CharacterCard";

const CharacterGrid = ({ characters }) => {
  return (
    <div >
      <div className="grid grid-cols-12 gap-3 max-w-[1000px]  mx-auto my-2">
       {characters.map(character => <CharacterCard key={character.id} character={character} /> )}
      </div>
    </div>
  );
};

export default CharacterGrid;
