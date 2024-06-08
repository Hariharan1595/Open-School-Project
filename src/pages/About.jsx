import React, { useState } from "react";
import "./About.css";
import photo4 from "../assets/images/photo5.jpeg";
import photo11 from "../assets/images/photo12.jpeg";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about">
      <h3>WHY WE DOING THIS</h3>
      <p>
        At AHUM Academy of Open Schooling, we believe that education should be
        accessible to everyone, regardless of their financial situation. Many
        students in India struggle to access quality education due to high costs
        and limited resources. Our mission is to remove these barriers and
        provide affordable, accessible education to all. By offering open
        schooling, we empower students with the knowledge and skills they need
        to build a better future for themselves and their communities.
      </p>
      <h3>WHO ARE WE</h3>
      <p>
        We are AHUM Academy of Open Schooling, run by AHUM Charitable Trust. Our
        non-profit organization is dedicated to making education accessible for
        all. Our team consists of passionate educators, volunteers, and
        community members who are committed to helping students succeed. We
        provide a range of educational resources and support to ensure that
        every student has the opportunity to learn and grow.
      </p>
      <h3>HOW LONG WE HAVE BEEN DOING THIS DOING THIS</h3>
      <p>
        AHUM Academy of Open Schooling has been making a difference in education
        for the past three years. Since our inception, we have been dedicated to
        providing affordable and accessible education to students across India.
        In these three years, we have helped numerous students achieve their
        educational goals and realize their potential.
      </p>
      <h3>HOW WE STARTED</h3>
      <p>
        Our journey began three years ago with a simple yet powerful vision: to
        make quality education available to all. AHUM Charitable Trust
        established AHUM Academy of Open Schooling with a firm commitment to
        breaking down barriers to education. From our humble beginnings, we have
        grown into a trusted institution that is making a significant impact in
        the lives of students.
      </p>
      <h3>WHAT IS THE DIFFERENCE FROM OTHERS</h3>
      <p>
        What sets AHUM Academy of Open Schooling apart is our hands-on approach
        and dedication to student success. In addition to offering open
        schooling programs, we actively engage with our students through various
        events, workshops, and support programs. We believe in providing not
        just education but also a supportive community where students can thrive
        and grow. Through our commitment to accessibility, affordability, and
        student support, we are making a difference in education one student at
        a time.
      </p>
      <h3>
        <u>AHUM CHARITABLE TRUST</u>
      </h3>

      <div className="about-image-div">
        <img src={photo11} alt="trustees" className="about-image" />
      </div>

      <h3>OBJECTIVES OF THE TRUST </h3>
      <p className="objectives">
        1. To form and develop Yoga & Meditation centers and resorts for general
        public for enhancing peaceful mindset and stress free living.
        <br />
        2. To inculcate the mindset of entrepreneurship skills and government
        facilities available to them.
        <br />
        3. To organize the business with latest Technological innovations and
        techniques for better social transformation.
        <br />
        4. To cultivate medicinal value plants and natural farming for day to
        day living.
        <br />
        5. To create health awareness and Better life style skill sets for
        holistic life.
        <br />
        6. To build erect and construct and to aid and assist in the build
        erection and constructions of houses, dormitories and places or
        residence for the poor destitute and those handicapped in mind or body
        to afford them all comfort and amenities.
        <br />
        7. To conduct classes for the poor, reading and to give food, clothing
        and cash grants to the poor and to afford relief to people of industries
        and affected by earthquake, food, famine, pestilence and other case and
        to the orphanages, rescue house and similar institutions and societies.
        <br />
        8. To encourage the Human Resources Development Educational Institutions
        from Pre-Primary, Primary, High school, Pre-University College, Degree
        colleges, Post-Graduation, and other courses. Teacher Training Colleges
        like D.Ed., B.Ed., B.PEd and other educational institutions as per the
        norm's and stipulations of National Council for Teacher Education.
        Maintenance of learning centers for transformation of personality,
        confidence building, positive thinking, communication skills, human
        relationship principles, active listening, leadership qualities, body
        language, goal setting, time management, success principles.
        <br />
        9. To start, manage and administer any Orphanage, Nursing home, Old age
        Homes, Hospitals, libraries, Diagnostic Centers, Reading rooms, Schools,
        colleges, ITI institutes, Research Institutions and other institution
        and extend its benefits to society at large irrespective of caste, creed
        or social status and to acquire land and building and other assets and
        properties for achieving the objects of the Trust.
        <br />
        10. To provide Medical facilities for deserving children's of the rural
        locality. To start Rural Health Clinic, Hospitals, Mobile Health Units
        etc.
        <br />
        11. To take over, absorb or amalgamate with any other trust or society
        or association or institution whose objects are similar to the objects
        of this trust.
        <br />
        12. To operate the schools and rehabilitation centers for needy persons,
        belonging to all denominations, irrespective of caste, creed, race,
        religion or language.
        <br />
        13. To spread the messages of preserving and conserving the Indian
        culture and save the same from influence of the western cultures
        throughout India and in all foreign countries.
        <br />
        14. To help and to provide relief to the poor irrespective of caste,
        creed, race, religion or language.
        <br />
        15. To support and promote the growing of trees and drilling of bore
        wells, restoration of water tanks, taking up drinking water projects,
        water development programs and providing of space and rooms for
        conducting religious functions or any other allied activities as the
        trustees deem fit from time to time.
        {!readMore && (
          <h4 className="blue-text" onClick={toggleReadMore}>
            Read More..
          </h4>
        )}
        <br />
        {readMore && (
          <>
            16. To start and run rehabilitation centers for mentally retarded,
            physically handicapped persons and to start vocational centers and
            old age homes.
            <br />
            17. To lift the public from the curses of poverty, hunger,
            illiteracy and diseases by starting and carrying out concentrated
            and intensive programs.
            <br />
            18. To promote cultural and artistic subjects / works like Drawings,
            paintings, music, shows, dramatic performances and dances reflecting
            / exhibiting the preaching of all religions heads of India, and
            Indian cultures / traditions.
            <br />
            19. To establish the education institutions for professional and
            medical sciences including the Indian system of Medicines including
            the establishment of research Institutions both for men and animals
            along with hospitals.
            <br />
            20. To promote and establish, and administer educational and
            vocational school or institution or college or deemed university and
            to run the same for educational or vocational purpose, in various
            places throughout India as well as outside India, subject to various
            permissions as required, with a motive to render service to the
            public and especially to economically backward students.
            <br />
            21. To promote gender equality; empowering women; setting up homes
            and hostels for women and orphans; setting up old age homes; day
            care centers and such other facilities for senior citizens and
            economically backward groups.
            <br />
            22. To cooperate with the Central & State Government and other
            authorities in extending aid for educational purposes.
            <br />
            23. To admit students for various discipline and subjects and for
            courses offered by the institution run by this trust and to offer
            scholarships to the deserving and/ or economically backward
            students.
            <br />
            24. To accept donations grants, presents and offerings, in cash or
            in kind from persons, association of persons, firms, companies,
            institutions, universities in India & abroad and to deal with the
            same for the purpose of achieving the objects of the trust mentioned
            above upon such terms and conditions as trustees may think fit and
            consistent with the objects of the trust.
            <br />
            25. To develop and mobilize Community and Natural Resources to give
            the right direction to people of the marginalized and economically
            weaker section of the trust for their sustainable overall
            development.
            <br />
            26. To work with special concentration for the Child & Women
            Welfare.
            <br />
            27. To organize and take up Health, Educational and Welfare
            programmes for needy Women and children on priority basis.
            <br />
            28. To promote charitable values, literature, science, art,
            education and culture.
            <br />
            29. To explore ways for promotion of socioeconomic development in
            the community.
            <br />
            30. To work for the welfare of trust neglected and marginalized
            section of the people.
            <br />
            31. To protest and fight against the injustice against people.
            <br />
            32. To encourage and promote family welfare activities among needy
            people.
            <br />
            33. To aid or establish any institution technical or otherwise, to
            promote education of art, Science or other related fields for the
            benefit of downtrodden and weaker sections of the trust.
            <br />
            34. To arrange and provide medical aid and other assistance
            necessary for living to the needy people who are incapable or
            handicapped or mentally/physically retarded and financially unfit.
            <br />
            35. To communicate and coordinate with the Govt. Local and public
            authorities on various issues related to development welfare and
            public interest on different subjects.
            <br />
            36. To construct, maintain, alter, improve or develop any building
            belonging to the trust or works necessary or convenient for purpose
            of the trust.
            <br />
            37. To arrange / establish and maintain centers of adult education,
            vocational education technical training, low cost education, formal
            & non-formal education.
            <br />
            38. To fight against HIV/AIDS and other communicable diseases.
            <br />
            39. To aware people about various social issues to fight against
            evils.
            <br />
            40. To organize and take-up Health, Educational and Welfare
            programmes for needy & poor Women & Children.
            <br />
            41. To promote and protect Indian Traditional music, dance,
            handicraft, handlooms, Art, modern art & literature.
            <br />
            42. To support the families and relatives of artists for promoting
            the budding artists in the trust.
            <br />
            43. To establish an award for the deserving people in the field of
            Music, Art grass root level social service, communal harmony,
            brotherhood and peace.
            <br />
            44. To encourage the emerging artists and their talents so that they
            can get proper recognition within and beyond the country.
            <br />
            45. To establish centre(s) for the promotion of Music, Dance and
            other Arts.
            <br />
            46. To establish residential and non-residential cultural centers
            for promoting Music, Dance and other Arts.
            <br />
            47. To work for Environmental Protection, Forestation, Plantation,
            Waste Land Management.
            <br />
            48. To organize vocational training for women and needy people.
            <br />
            49. To organize awareness camps, health camps, March, workshops,
            campaign and exhibition.
            <br />
            50. To provide various medical services such as organizing health
            and awareness camps of Immunization, Eye Care, Motherhood, Child
            Care, and Communicable Diseases.
            <br />
            51. To prevent any epidemics and to advocate both permanent and
            temporary measures of Family Planning.
            <br />
            52. To provide basic medical facility, sanitation, general health
            care and other needful support which can be helpful for public to
            overcome sufferings and agony of any natural and manmade disaster
            and to facilitate them to rehabilitate.
            <br />
            53. To provide medical, emotional, psychological, social and medical
            support to senior citizens of our trust by setting up various
            drop-in centres, senior citizen homes, old-age homes and other
            entertainment centres so that these highly honorable people should
            not be neglected.
            <br />
            54. To undertake activities for sensitizing people to preserve the
            natural resources of our nation and to maintain the ecological
            balance of the area.
            <br />
            55. To provide and facilitate legal assistance to underprivileged
            and poor section of trust to fight for their rights and justice.
            <br />
            56. To promote, encourage and facilitate research programmes and
            trainings in the field of public health, education and empowerment.
            <br />
            57. To arrange and organize religious, social and cultural
            programmes for all human being from time to time.
            <br />
            58. To create a sense of brotherhood, love, humanity, affection,
            cooperation and friendship amongst the members of the trust and the
            beneficiaries.
            <br />
            59. To make best efforts for promotion, development and protection
            of the beneficiaries/ target population and help them in distress.
            <br />
            60. To help poor, widows, handicapped, orphans, old aged, mentally
            retarded and under privileged section of the trust/community.
            <br />
            61. To run/ operate different types of education program/schools
            like formal, non-formal, pre-school for the education development of
            under privileged children of the community/trust.
            <br />
            62. To run the different types of health programmes to raise the
            health status of vulnerable groups, poor and needy.
            <br />
            63. To open / run / manage institute / collage of higher /
            professional / vocation education in any part of the country for
            providing quality education and training to youth and children.
            <br />
            64. To promote and protect natural herbs and plants by cultivation,
            preservation, storage, processing, demonstration, creating botanical
            garden and providing necessary training.
            <br />
            65. To establish / run / manage hospitals, health centers, mobile
            health clinics, research centre to provide health care, counseling
            and referral services for all kinds of illness and diseases.
            <br />
            66. To promote traditional therapies like Yoga, Naturopathy,
            Meditation, Acupressure, Acupuncture, Massage Therapy, Ayurveda,
            Homeopathy, Reiki etc.
            <br />
            67. To establish, build or manage Hostels, Short Stay Homes,
            Rehabilitation Centers, Shelters, Crèches, Child Care Centre or
            Children’s Home, Counseling Centers and Help Line Centers for Women,
            Children, Old aged persons, Drug addicts and needy persons.
            <br />
            68. To work for the welfare of Agricultural workers, Farmers,
            Unorganized Labours, Industrial Labours and Migrated Labours.
            <br />
            69. To form women groups, youth groups, self-help groups; old aged
            groups, adolescent groups, children groups/clubs, community leaders
            groups and group of volunteers.
            <br />
            70. To promote traditional games along with the contemporary sports
            among youth & others.
            <br />
            71. To work for welfare & support for the families of Martyrs and
            Prisoners.
            <br />
            72. To work against the exploitation of Animals & Birds and make
            sincere efforts to protect them.
            <br />
            73. To celebrate annual day of the trust every year as cultural &
            social event.
            <br />
            74. To establish Citizen Forum(s) and Resident Welfare
            Association(s) for the development of high values of the Unity,
            Brotherhood, Communal Harmony and Peace.
            <br />
            75. To promote and support voluntary donation of Blood, Eyes and
            other parts of human body for charitable purpose.
            <br />
            76. To take up, initiate or assist social development activities or
            welfare programmes for bringing positive change in the lives of the
            common people.
            <br />
            77. To Empowering Down Trodden Communities to Leverage All
            Anti-Poverty Schemes & Programmes.
            <br />
            78. To Promotion of Viable Small Holder Agriculture through
            Sustainable Agricultural Practices (Organic) and RMGS (Formers
            Association).
            <br />
            79. To Using Multiple Developmental Interventions To Reach The
            Widest Possible Range Of Beneficiaries Through Community Based
            Organization, SHG, and Youth Associations.
            <br />
            80. To Focusing On Children Education With Special Emphasis On Girl
            Child Education Who Is The Future Leaders Of The Society.
            <br />
            81. To Achieve Complete Literacy and To Work For Promotion of
            Education.
            <br />
            82. To Work Towards Elimination Of Practice Of Child Labour And To
            Take Appropriate Steps For Their Rehabilitation.
            <br />
            83. To Implement And Co-Ordinate Various Activities Relating To
            Welfare Of People Belonging To Scheduled Castes, Scheduled Tribes,
            Other Backward Classes And Minority Groups And Also Engage Itself In
            Related Research Activities.
            <br />
            84. To make efforts for the overall development of society.
            <br />
            85. To Implement A Job-Oriented and Labour-Based Educational System;
            Establish, Manage and Run Such Educational Institutions for Meeting
            the Needs, Aspirations and Welfare of Every Section Of Society.
            <br />
            86. To Set-Up and Run Training Centers In Remote Rural Areas Of The
            State, To Uplift The Educational and Economic Standards Of The
            Deprived Sections Of Society, And To Eliminate Their Prevailing Bad
            Social Customs, Illiteracy, Dowry System, Child Marriage, Fanaticism
            Etc.
            <br />
            87. To Organize and Conduct Programmes On Health, Education and
            Sanitation; Create Public Awareness.
            <br />
            88. To Create Awareness and Implement Health and Family Welfare and
            To Organize Awareness Movement for Population Control.
            <br />
            89. To Develop The Leadership Capacity Of The Society And
            Inculcating The Sense Of Belongings Amongst People Of All Groups And
            Religion.
            <br />
            90. To Identify Such Historical, Cultural and Spiritual/Religious
            Places of Ancient India, Known As Symbols of Social Integrity and To
            Work for Their Protection and Conservation.
            <br />
            91. To Bring About Social Awareness And To Take Steps, With The
            Cooperation Of Administration As Well As Public, Against Corruption,
            Injustice, Atrocities And Wrongful Acts Bio Diversity Conservation
            Through Natural Resource Management.
            <br />
            92. To Implement Projects for Development Of Rural Sources Of
            Livelihood And to Provide Market for the Sale of Agricultural and
            Other Rural Products.
            <br />
            93. To manage and Implement all Governmental and Non-Governmental
            Schemes Meant for Human Welfare.
            <br />
            94. To Secure Financial and Other Assistance from National and
            International Agencies/Organizations.
            <br />
            95. To Establish and Manage Cultural and Spiritual Institutions.
            <br />
            96. To Celebrate National and International days and conduct Sports,
            yoga class event in summer days.
            <br />
            {readMore && (
              <h4 className="blue-text" onClick={toggleReadMore}>
                Show Less..
              </h4>
            )}
          </>
        )}
      </p>
    </div>
  );
};

export default About;
