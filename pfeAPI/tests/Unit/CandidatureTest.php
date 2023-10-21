<?php
namespace App\Tests\Unit;

use App\Entity\Offre;
use App\Entity\Candidat;
use App\Entity\Candidature;
use Symfony\Component\Validator\Validation;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


class CandidatureTest extends KernelTestCase {
     /**
     * @var \Doctrine\ORM\EntityManagerInterface
     */
    private $entityManager;

    

    protected function setUp() :void{
        parent::setUp();
        $this->candidature = new Candidature();
        $kernel = self::bootKernel();
        $this->entityManager = $kernel->getContainer()
        ->get('doctrine')
        ->getManager();
    }


    public function testModifierCandidature(){
       
        $validator = Validation::createValidatorBuilder()
        ->enableAnnotationMapping(true)
        ->getValidator();
       
        $this->candidature= $this->entityManager->getRepository(Candidature::class)->find(173);
        self::assertEquals(173,$this->candidature->getId());
        self::assertEquals(2,$this->candidature->getStatus());

        //Status de l'offre doit être un entier
        $this->candidature->setStatus("exemple");

        
        $errors = $validator->validate($this->candidature);
        self::assertEquals(0,count($errors));

        $this->entityManager->persist($this->candidature);
        $this->entityManager->flush();

       $this->candidature = $this->entityManager->getRepository(Candidature::class)->find(173);
        self::assertEquals(173,$this->candidature->getId());
        self::assertEquals(0,$this->candidature->getStatus());
       
    }


}