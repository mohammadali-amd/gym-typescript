import ActionButton from '@/share/ActionButton';
import HText from '@/share/HText';
import { BenefitType, SelectedPage } from '@/share/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
   {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
         "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
   },
   {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
         "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
   },
   {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
         "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
   },
];

const container = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.2 },
   },
};

type Props = {
   setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
   return (
      <section
         id='benefits'
         className='mx-auto min-h-full w-5/6 py-20'
      >
         <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
         >
            {/* Header */}
            <motion.div className='md:my-5 md:w-3/5'
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
               }}
            >
               <HText>MORE THAN JUST GYM.</HText>
               <p className='my-5 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et sequi ducimus quod repellat, eveniet aut dolorem ex fuga ad ipsam voluptate. Minus assumenda explicabo necessitatibus et dolorum libero pariatur!
               </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
               className="mt-5 items-center justify-between gap-8 md:flex"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={container}
            >
               {benefits.map((benefit: BenefitType) => (
                  <Benefit
                     key={benefit.title}
                     icon={benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                  />
               ))}
            </motion.div>

            {/* Graphyics & Description  */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
               {/* Graphic */}
               <img
                  className='mx-auto'
                  src={BenefitsPageGraphic}
                  alt="benefits-page-graphic"
               />

               {/* Description */}
               <div>

                  {/* Title */}
                  <div className="relative">
                     <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true, amount: 0.5 }}
                           transition={{ duration: 0.5 }}
                           variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                           }}
                        >
                           <HText>
                              MILLIONS OF HAPPY MEMBERS GETTING {" "}
                              <span className='text-primary-500'>FIT</span>
                           </HText>
                        </motion.div>
                     </div>
                  </div>

                  {/* Descript */}
                  <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                     }}
                  >
                     <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus, quisquam, esse explicabo id facilis officiis sit vero cumque at minima consectetur molestias ab eum incidunt adipisci suscipit assumenda inventore!
                     </p>
                     <p className='my-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex similique ipsam aperiam atque quo optio omnis delectus a minima temporibus error corporis, sunt corrupti unde id praesentium pariatur nostrum blanditiis?
                     </p>
                  </motion.div>

                  {/* Button */}
                  <div className='relative mt-16'>
                     <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                           Join Now
                        </ActionButton>
                     </div>
                  </div>

               </div>
            </div>
         </motion.div>
      </section >
   )
};

export default Benefits;