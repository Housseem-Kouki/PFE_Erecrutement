<?php
namespace App\Tests\Unit;
use DateTime;
use App\Entity\User;
use App\Entity\Candidat;
use PHPUnit\Framework\TestCase;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserTest extends TestCase{

    private User $user;

    protected function setUp() :void{
        parent::setUp();
        $this->user = new User();
        $this->candidat = new Candidat();
    }

    public function testGetEmail():void{
       $value = 'candidat@gmail.com';
       $response = $this->user->setEmail($value);

       self::assertInstanceOf(User::class , $response);
       self::assertEquals($value,$this->user->getEmail());
       self::assertEquals($value,$this->user->getUsername());

    }


    public function testGetRoles():void {
        $value = ['ROLE_ADMIN'];
        $response = $this->user->setRoles($value);
        self::assertInstanceOf(User::class , $response);
  
        self::assertContains('ROLE_ADMIN',$this->user->getRoles());
    }
    public function testGetNom():void {
        $value = 'Houssem';
        $response = $this->user->setNom($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getNom());

    }

    public function testGetPrenom():void {
        $value = 'kouki';
        $response = $this->user->setPrenom($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getPrenom());

    }

    public function testGetTel():void {
        $value = 28618918;
        $response = $this->user->setTel($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getTel());

    }

    public function testGetCivilite():void {
        $value = "Homme";
        $response = $this->user->setCivilite($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getCivilite());

    }

    public function testGetPassword():void {
        $value = "Homme";
        $response = $this->user->setPassword($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getPassword());

    }
    public function testGetDate():void {
        $value = new \DateTime();
        $response = $this->user->setDaten($value);
        self::assertInstanceOf(User::class , $response);
        self::assertEquals($value,$this->user->getDaten());

    }


    



  

}