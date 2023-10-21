<?php
namespace App\Tests\Unit;

use App\Entity\Agent;
use App\Entity\Offre;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\Validation;



class OffreTest extends KernelTestCase {
     /**
     * @var \Doctrine\ORM\EntityManagerInterface
     */
    private $entityManager;

    

    protected function setUp() :void{
        parent::setUp();
        $this->offre = new Offre();
        $kernel = self::bootKernel();
        $this->entityManager = $kernel->getContainer()
        ->get('doctrine')
        ->getManager();
    }

    public function testAjoutOffre(){
        $validator = Validation::createValidatorBuilder()
        ->enableAnnotationMapping(true)
        ->getValidator();
       
        $agent = $this->entityManager->getRepository(Agent::class)->find(8);

        //Manque poste de l offre d emploi
        $this->offre->setAgemax(22);
        $this->offre->setExperience("ExperienceExemple");
        $this->offre->setDiplome("DiplomeExemple");
        $this->offre->setMission("MissionExemple");	  	
        $this->offre->setCompetence("ComptenceExemple");
        $this->offre->setAtouts("AtoutsExemple");
        $this->offre->setStatusoff(0);
        $this->offre->setAgent($agent);


        $errors = $validator->validate($this->offre);
        self::assertEquals(0,count($errors));

        $this->entityManager->persist($this->offre);
        $this->entityManager->flush();

      
    }

    public function testModifierOffre(){
       
        $validator = Validation::createValidatorBuilder()
        ->enableAnnotationMapping(true)
        ->getValidator();
       
        $this->offre= $this->entityManager->getRepository(Offre::class)->find(31);
        self::assertEquals(31,$this->offre->getId());
        self::assertEquals(0,$this->offre->getStatusoff());

        $this->offre->setStatusoff(1);
        $this->offre->setAtouts("offre demandée");
        
        $errors = $validator->validate($this->offre);
        self::assertEquals(0,count($errors));

        $this->entityManager->persist($this->offre);
        $this->entityManager->flush();

       $this->offre = $this->entityManager->getRepository(Offre::class)->find(31);
        self::assertEquals(31,$this->offre->getId());
        self::assertEquals(1,$this->offre->getStatusoff());
        self::assertEquals("offre demandée",$this->offre->getAtouts()); 
    }
    
}