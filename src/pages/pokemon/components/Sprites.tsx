interface SpritesProps {
  frontSprite?: string;
  backSprite?: string;
  name?: string;
}

export const Sprites = ( { frontSprite, backSprite, name }: SpritesProps ) => {
  return (
    <>
      <img
        src={ frontSprite }
        width={ 100 }
        height={ 100 }
        alt={ `${ name } sprite` }
      />
      <img
        src={ backSprite }
        width={ 100 }
        height={ 100 }
        alt={ `${ name } sprite` }
      />
    </>
  );
};