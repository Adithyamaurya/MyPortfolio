import React from 'react';
import '../../styles/profile.css';
import ImageView from './ImageView.jsx';
import { AnimatePresence } from 'framer-motion';
const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ImageView isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>         <div className="flex flex-col lg:flex-row gap-[0.5rem] p-[0.5rem] font-['Courier_New',_Courier,_monospace] text-[#ccff00]" >

        {/* block 1 */}
        <div className="fitCard flex min-h-[24em] min-w-[18em] flex-col items-center justify-center gap-[0.5rem]  p-[0.5rem] text-[#ccff00] ">
          <div className="flex h-[4em] w-full items-center justify-center bg-black border border-gray-800 p-[1rem]">
            <p className="text-[1.25rem] font-black" style={{ fontFamily: '"Inter", sans-serif' }}>- <span className='text-white'>ADITHYA</span> -</p>
          </div>
          <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
            <div className="flex h-[10em] w-[10em] items-center justify-center bg-black border border-gray-800 px-[0.5rem] pt-[1rem]  group relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[300%]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={96} height={96} >
                  <path fill='white' d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
                  <path fill='white' d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
                  <path fill='white' d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
                </svg>
              </div>
              <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[350%] text-center text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                <a href="https://drive.google.com/file/d/1S91Ua3Lq3VSgfm3duwO93OkfXXRt17Pa/view?usp=sharing">VIEW RESUME</a>
              </p>
            </div>
            <div className="flex h-[10em] flex-1 flex-col items-center justify-center gap-[0.5rem]">
              <div className="flex w-full flex-1 items-center justify-center bg-black border border-gray-800 group relative overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[300%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="white" class="bi bi-git" viewBox="0 0 16 16">
                    <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
                  </svg>
                </div>
                <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[150%] text-center text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                  16 repos
                </p>
              </div>
              <div className="flex w-full flex-1 items-center justify-center bg-black border border-gray-800 group relative overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[300%]">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" width={36} height={36} viewBox="0 0 24 24" id="leetcode">
                    <path fill="#ccff00" d="M20.303,16.047h-9.561c-0.936,0-1.697-0.803-1.697-1.79s0.762-1.79,1.697-1.79h9.561c0.936,0,1.697,0.803,1.697,1.79S21.238,16.047,20.303,16.047z"></path>
                    <path fill="white" d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
                  </svg>
                </div>
                <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[150%] text-center text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                  3q SOLVED
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-[4.5rem] w-full flex-row items-center justify-center gap-[0.5rem]">
            <div className="flex h-full w-[10rem] items-center justify-center bg-black border border-gray-800 group relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[300%]">
                <svg viewBox="0 0 48 48" fill="none" height={36} width={36} xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" strokeWidth={3} strokeLinecap="round" stroke="white" />
                  <path d="M18.804 27a5.999 5.999 0 0 0 10.392 0" strokeWidth={3} strokeLinecap="round" stroke="white" />
                  <path d="M18 15.75h-2a2.25 2.25 0 0 0 0 4.5h2a2.25 2.25 0 0 0 0-4.5Zm14 0h-2a2.25 2.25 0 0 0 0 4.5h2a2.25 2.25 0 0 0 0-4.5Z" strokeWidth=".25" strokeLinecap="round" stroke="white" fill="white" />
                </svg>
              </div>
              <p className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 translate-y-[150%] text-[1rem] font-bold  duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                HAPPY
              </p>
            </div>
            <div className="flex h-full w-[6.5rem] items-center justify-center bg-black border border-gray-800 relative group overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[250%]">
                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-git-merge">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M7 8l0 8" /><path d="M7 8a4 4 0 0 0 4 4h4" />
                </svg>
              </div>
              <p className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 translate-y-[150%] text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                300+ commits
              </p>
            </div>
          </div>
          <div className="group relative flex h-[5em] w-full items-center justify-center overflow-hidden bg-black border border-gray-800">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-black tracking-widest duration-500 group-hover:-translate-x-[250%] text-white" style={{ fontFamily: `"Inter",sans-serif` }}>
              DIRECTIVE
            </p>
            <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-y-1/2 translate-x-1/2 px-[1rem] text-[0.7rem] font-bold duration-500 group-hover:-translate-x-1/2 text-center text-[#ccff00]">
              “The real workout starts when you want to stop.” – Ronnie Coleman
            </p>
          </div>
        </div>

        {/* block 2 */}
        <div className="fitCard flex min-h-[24em] min-w-[20em] flex-col items-center justify-center gap-[0.5rem]">
          <div className="flex h-[4em] w-full items-center justify-center bg-black border border-gray-800 p-[1rem]">
            <p className="text-[1.25rem] font-black " style={{ fontFamily: '"Inter", sans-serif' }}>- <span className='text-white'>TECH_STACKS</span> -</p>
          </div>
          <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
            <div className="group relative flex h-[10em] flex-1 flex-col items-center justify-center bg-black border border-gray-800 overflow-hidden">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black  duration-300 group-hover:-translate-y-[500%] text-white" style={{ fontFamily: '"Inter", sans-serif' }}>FRONTEND</p>
              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center text-[0.75rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00] px-2">
                <p>React.js</p>
                <p>HTML</p>
                <p>TailwindCSS</p>
                <p>TypeScript</p>
              </div>
            </div>
            <div className="group relative flex h-[10em] flex-1 flex-col items-center justify-center bg-black border border-gray-800 overflow-hidden">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black duration-300 group-hover:-translate-y-[500%] text-white" style={{ fontFamily: '"Inter", sans-serif' }}>BACKEND</p>
              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center text-[0.75rem] font-['Courier_New',_Courier,_monospace] duration-300 group-hover:-translate-y-1/2 text-[#ccff00] px-2">
                <p>Node.js</p>
                <p>PHP</p>
                <p>MongoDB</p>
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className="group relative flex h-[4.5rem] w-full items-center justify-center bg-black border border-gray-800 overflow-hidden">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black duration-300 group-hover:-translate-y-[350%] text-white" style={{ fontFamily: '"Inter", sans-serif' }}>TOOLS</p>
            <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[200%] text-center text-[0.85rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00] tracking-tighter">
              Git VSCode Postman
            </p>
          </div>
          <div className="group relative flex h-[5em] w-full items-center justify-center overflow-hidden bg-black border border-gray-800">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-black tracking-widest duration-500 group-hover:-translate-x-[350%] text-white" style={{ fontFamily: `"Inter",sans-serif` }}>STATUS</p>
            <div className="absolute left-1/2 top-1/2 h-fit w-full -translate-y-1/2 translate-x-1/2 px-[1rem] text-[0.7rem] font-[#ccff00] duration-500 group-hover:-translate-x-1/2 text-center">
              <p>&gt; ALL PROTOCOLS OPERATIONAL</p>
              <p>&gt; ENCRYPTING NEW DEPLOYMENTS...</p>
            </div>
          </div>
        </div>

        {/* block 3*/}
        <div className="fitCard flex min-h-[24em] min-w-[18em] flex-col items-center justify-center gap-[0.5rem]">
          <div className="flex h-[4em] w-full items-center justify-center bg-black border border-gray-800 p-[1rem]">
            <p className="text-[1.25rem] font-black" style={{ fontFamily: '"Inter", sans-serif' }}>- <span className='text-white'>DESIGN</span> -</p>
          </div>
          <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
            <div className="group relative flex h-[10em] flex-1 flex-col items-center justify-center bg-black border border-gray-800 overflow-hidden">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black duration-300 group-hover:-translate-y-[500%] text-white" style={{ fontFamily: '"Inter", sans-serif' }}>ARTS</p>
              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center text-[0.75rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00] px-2">
                <p>PORTRAIT</p><p>SKETCHES</p><p>DIGITAL ARTS</p><br />
                <button onClick={() => setIsOpen(true)} className='text-white'>VIEW IMAGES</button>
              </div>
            </div>
          </div>
          <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
            <div className="group relative flex h-[10em] flex-1 flex-col items-center justify-center bg-black border border-gray-800 overflow-hidden">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black duration-300 group-hover:-translate-y-[500%] text-white" style={{ fontFamily: '"Inter", sans-serif' }}>EDITING</p>
              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 translate-y-[150%] text-center text-[0.75rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00] px-2">
                <p>Filmora 14</p><p>Canva</p><p>Color Grading</p> <br />
                <a href="https://drive.google.com/drive/folders/1XN_j-JQ6PYUByIpBfA0F1AcogMeAQcxb?usp=sharing" className='text-white'>VIEW VIDEOS</a>
              </div>
            </div>
          </div>
        </div>

        {/* block 4 */}
        <div className="fitCard flex min-h-[24em] min-w-[18em] flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] text-[#ccff00]">
          <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
            <div className="flex h-[10em]  flex-1 flex-col items-center justify-center gap-[0.5rem]">
              <div className="flex w-full h-full flex-1 items-center justify-evenly bg-black border border-gray-800 group relative overflow-hidden">
                <p className='text-[0.75rem]'>
                  DETECTING MOTION <br /> IN <br /> USER ACTIVITY
                </p>
                <div className="loader item-end">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-row items-center justify-center gap-[0.5rem]">
            <div className="flex h-full w-full items-center justify-center bg-black border border-gray-800 group relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-[300%]">
                <svg fill="#ffffff" height={128} width={128} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.811 32.811" xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281 l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66 C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785 L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006 l5.646-10.576L32.149,16.811z"></path>
                      <path d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281 l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66 C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785 L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006 l5.646-10.576L32.149,16.811z"></path>
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>
                </svg>
              </div>
              <p className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 translate-y-[350%] text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2 text-[#ccff00]">
                UNDER DEVELOPMENT
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Profile;

