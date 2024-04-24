import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags, githubLink, websiteLink, image, features } = project;

  return (
    <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443]'>
      <div className="flex items-center justify-between w-full">
        {/* Website Link */}
        <Link
          href={websiteLink}
          target='_blank'
          className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]">
          <FaPlay />
        </Link>
        
        {/* GitHub Link */}
        <Link
          href={githubLink}
          target='_blank'
          className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer no-underline  delay-[0.3s] group-hover:translate-x-[-140px]">
          <FaCode />
        </Link>
      </div>
      <div className="p-6">
        <Image
          src={image ? image?.src : placeholder}
          alt={name}
          width={1080}
          height={720}
          className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0"
        />
      </div>
      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6 leading-[110%] rounded-[0_20px_20px_0] left-0 top-0 bg-[#0f0b24]  text-[#EFF3F4] translate-y-[25%] md:translate-y-[50%] group-hover:translate-x-[-2%] text-xs md:text-sm">
        {description}
      </p>
      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
