<?php

namespace App\Tests\Unit;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\EntityResult;
use Symfony\Component\Validator\Validation;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


class UserRepositoryTest extends KernelTestCase {
    /**
     * @var \Doctrine\ORM\EntityManagerInterface
     */
    private $entityManager;
    
    protected function setUp() :void{
        parent::setUp();
        $this->user = new User();
        $kernel = self::bootKernel();
        $this->entityManager = $kernel->getContainer()
        ->get('doctrine')
        ->getManager();
    }
   

   

    public function testAjoutUser(){
        $validator = Validation::createValidatorBuilder()
        ->enableAnnotationMapping(true)
        ->getValidator();

     
        $this->user ->setNom("exemple");
        $this->user ->setPrenom("exemple");
        $this->user ->setEmail("exemple@gmail.com");
        $this->user ->setTel(28618918);
        $this->user ->setCivilite("Homme");
        $this->user ->setDaten(new \DateTime());
        $this->user ->setPassword("azerty");
        $this->user ->setRoles(['ROLE_USER']);

        $errors = $validator->validate($this->user);
        self::assertEquals(0,count($errors));

        $this->entityManager->persist($this->user);
        $this->entityManager->flush();

    }
}