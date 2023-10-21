<?php 

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture {

    public function load(ObjectManager $manager)
    {

        $user = new User();
        $user->setNom("Fixture");
        $user->setPrenom("Fixture");
        $user->setEmail("Fixture@gmail.com");
        $user->setTel(28618918);
        $user->setCivilite("Homme");
        $user->setDaten(new \DateTime());
        $user->setPassword("Fixture");
        $user->setRoles(['ROLE_USER']);
        // $product = new Product();
        // $manager->persist($product);
        $manager->persist($user);
        $manager->flush();
    }

}